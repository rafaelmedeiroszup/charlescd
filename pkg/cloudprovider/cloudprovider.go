package cloudprovider

import (
	"k8s.io/client-go/dynamic"
	"octopipe/pkg/cloudprovider/eks"
	"octopipe/pkg/cloudprovider/generic"
	"octopipe/pkg/cloudprovider/incluster"
	"octopipe/pkg/cloudprovider/outofcluster"
	"os"
)

const (
	GenericCloudProviderType = "GENERIC"
	EKSCloudProviderType     = "EKS"
	InClusterType            = "IN_CLUSTER"
	OutOfClusterType         = "OUT_OF_CLUSTER"
)

type UseCases interface {
	Connect() (dynamic.Interface, error)
}

type Provider struct {
	Provider string `json:"provider"`
	eks.EKSProvider
	generic.GenericProvider
}

func NewCloudProvider(provider *Provider) UseCases {
	switch provider.Provider {
	case GenericCloudProviderType:
		return generic.NewGenericProvider()
	case EKSCloudProviderType:
		return eks.NewEKSProvider()
	default:
		return provider.newDefaultConfig()
	}
}

func (provider *Provider) newDefaultConfig() UseCases {
	if config := os.Getenv("K8S_CONFIG"); config == OutOfClusterType {
		return outofcluster.NewOutOfCluster()
	} else {
		return incluster.NewInCluster()
	}
}
