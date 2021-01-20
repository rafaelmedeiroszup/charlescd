/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import omit from 'lodash/omit';
import size from 'lodash/size';
import includes from 'lodash/includes';
import Button from 'core/components/Button';
import Form from 'core/components/Form';
import Text from 'core/components/Text';
import { Webhook } from './interfaces';
import { Props } from '../interfaces';
import { EVENTS } from './constants';
import { useWebhook } from './hooks';
import Styled from './styled';

const FormWebhook = ({ onFinish, data }: Props<Webhook>) => {
  const { status, save } = useWebhook();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid }
  } = useForm<Webhook>({ mode: 'onChange' });

  const watchEventType = watch('eventType');

  useEffect(() => {
    if (status === 'resolved') onFinish();
  }, [onFinish, status]);

  const onSubmit = (webhook: Webhook) => {
    if (watchEventType === 'everything') {
      webhook.events = EVENTS;
    }

    save(omit(webhook, 'eventType'));
  };

  const renderOptions = () => (
    <Fragment>
      <Form.Checkbox
        ref={register({ required: true })}
        name="events"
        label="Deploy"
        value="DEPLOY"
        defaultChecked={includes(data?.events, 'DEPLOY')}
        description="Deploy started or finished"
      />
      <Form.Checkbox
        ref={register({ required: true })}
        name="events"
        label="Undeploy"
        value="UNDEPLOY"
        defaultChecked={includes(data?.events, 'UNDEPLOY')}
        description="Undeploy started or finished"
      />
    </Fragment>
  );

  const renderForm = () => (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Text.h5 color="dark">
        Webhooks allow external services to be notified when certain events
        happen. When the specified events happen, we’ll send a POST request to
        each of the URLs you provide. Consult our documentation for further
        details.
      </Text.h5>
      <Styled.Fields>
        <Form.Input
          ref={register({ required: true })}
          name="description"
          label="Description"
          defaultValue={data?.description}
        />
        <Form.Input
          ref={register({ required: true })}
          name="url"
          label="Webhook URL"
          defaultValue={data?.url}
        />
        <Form.Password
          ref={register({ required: true })}
          name="apiKey"
          label="Secret"
          defaultValue={data?.apiKey}
        />
        <Text.h5 color="dark">
          Witch events would you like to trigger this webhook?
        </Text.h5>
        <Form.Radio
          ref={register({ required: true })}
          name="eventType"
          value="everything"
          label="Send me everything"
          defaultChecked={size(data?.events) === size(EVENTS)}
        />
        <Form.Radio
          ref={register({ required: true })}
          name="eventType"
          value="individual"
          label="Let me select individual events"
          defaultChecked={size(data?.events) < size(EVENTS)}
        />
        {watchEventType === 'individual' && renderOptions()}
        <Button.Default
          type="submit"
          isDisabled={!isValid}
          isLoading={status === 'pending'}
        >
          Save
        </Button.Default>
      </Styled.Fields>
    </Styled.Form>
  );

  return (
    <Styled.Content>
      <Text.h2 color="light">Add Webhook</Text.h2>
      {renderForm()}
    </Styled.Content>
  );
};

export default FormWebhook;