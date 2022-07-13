import { gql } from '@apollo/client';
export const TOPIC_LIST = gql`
query GetTopics($topicName: String!) {
    topic(name: $topicName){
      id
      name
      viewerHasStarred
      stargazerCount
          stargazers{
        totalCount
      }
      relatedTopics(first: 10){
        id
        name
        stargazerCount
      }
    }
  }
`;