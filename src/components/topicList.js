import React from 'react'
import { useQuery } from '@apollo/client';
import {TOPIC_LIST} from '../querys/topics'
import Topic  from "./topic";


const TopicList = (props) => {

    const topicName = props.topic
    //using apollo hook for fetch data via query
    const { loading, error, data } = useQuery(TOPIC_LIST, { variables: { topicName } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if ( !data.topic ) return <p> no results </p>;

    const relatedTopics = () => {
        return data.topic.relatedTopics.map((topic, index) => {
            return (
                <Topic 
                key={index}
                name={topic.name} 
                stargazerCount={topic.stargazerCount}
                onClick={props.clickOnTopic}
            />)
        })
    }

    return (
        <div id="topics">
            <Topic 
                name={data.topic.name} 
                stargazerCount={data.topic.stargazerCount}
                onClick={()=>{}}
            />
            <p>Related topics to "{topicName}": </p>
            <div className="related">
                {relatedTopics()}
            </div>
        </div>
    )
}

export default TopicList