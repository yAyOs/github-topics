import React,  {useState }from 'react';
import TopicList from './topicList';


const Home = () => {

  const [search, setSearch] = useState('')

  const searching = () => {
    let searchTerm = document.getElementById('_searchBar').value
    setSearch(searchTerm.toLocaleLowerCase())
  }
  const onEnter = (e) => {
    if (e.key === 'Enter')
        searching()
  }

  const relatedTopic = topicName => {
    document.getElementById('_searchBar').value = topicName
    setSearch(topicName)
  }

  return (
    <section id="home">
        <input id="_searchBar" className="inputBase" onKeyDown={onEnter}/>
        <button onClick={searching} className="button" >Search</button>
        { search.length > 0 ? <TopicList topic={search} clickOnTopic={relatedTopic}/> : null}
    </section>
  )

}

export default Home;
