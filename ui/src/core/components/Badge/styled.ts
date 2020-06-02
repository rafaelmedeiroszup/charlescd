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

import styled from 'styled-components';

const Badge = styled.div`
  border: 1px solid ${({ theme }) => theme.badge.border};
  color: ${({ theme }) => theme.badge.color};
  border-radius: 20px;
  padding: 0px 10px;
  box-sizing: border-box;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;

  *:first-letter {
    text-transform: uppercase;
  }
`;

export default {
  Badge
};
