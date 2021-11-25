import { VUE_QUERY_CLIENT, QueryClient } from 'vue-query';
import { config } from '@vue/test-utils';

config.global.provide = {
  [VUE_QUERY_CLIENT]: new QueryClient(),
};