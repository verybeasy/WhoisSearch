import client from '../../lib/elasticsearch';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  
  const { query } = req.body;

  try {
    // search.index({
    //   index: 'search',
    //   id: '',
    //   document: {

    //   }
    // });

    const result = await client.search({
      index: 'whois',
      body: {
        query: {
          match_phrase_prefix: {
            raw_whois: {
              query: query,      // Replace `query` with your search term
              max_expansions: 50 // Controls the number of terms matched by the prefix
            }
          }
        }
      }
    });

    return res.status(200).json(result.hits.hits);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error querying Elasticsearch', error });
  }
}