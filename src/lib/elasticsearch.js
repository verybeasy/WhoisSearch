import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: 'https://37f7588a024f45769aebd14909d8f88a.us-central1.gcp.cloud.es.io:443',
  auth: {
    apiKey: 'UXBSdDNKTUJjTnE0czFFeXgzMEk6NWJBbTZlb05SMkcxbi1oNzZja3RKUQ=='
  }
});

export default client;