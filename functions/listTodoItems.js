const { Client } = require('@notionhq/client');

exports.handler = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_TODO_DATABASE_ID;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    const { results } = response;
    console.log(results.length);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
      },
      // update to use the correct response
      body: JSON.stringify(
        {
          message: 'Test response',
        },
        null,
        2
      ),
    };
  } catch (e) {
    console.error(e.body);
  }
};
