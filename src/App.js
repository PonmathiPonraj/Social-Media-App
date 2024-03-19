import { Link, Routes, Route } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import PostPage from './PostPage';
import Missing from './Missing';
import NewPost from './NewPost';
import Home from './Home';
import Post from './Post';
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Made a video about Tesla Q1 results'
    },
    {
      id: 2,
      title: 'My Second Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'I attende a DeFi blockchain event'
    },
    {
      id: 3,
      title: 'My Third Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Web3 global summit next week'
    },
    {
      id: 4,
      title: 'My Fourth Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'ETH will outperform BTC'
    }
  ])

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    const filteredResults = posts.filter((post) => 
      ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
      ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyypp');
    const newPost = { id, title: postTitle, datetime, body: postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
  }

  // const handleDelete = (e) => {
    
  // }

  return (
    <div className="App">
      <Header title='Social Media'/>
      <Nav
        search = {search}
        setSearch = {setSearch}
      />
      <Routes>
        <Route path = '/' element = {<Home posts = {searchResults}/>} />
        <Route path = 'post'>
          <Route index element = {<NewPost 
            handleSubmit = {handleSubmit}
            postTitle = {postTitle}
            setPostTitle = {setPostTitle}
            postBody = {postBody}
            setPostBody = {setPostBody}
          />} />
          <Route path = ':id' element = {<PostPage posts = {posts} handleDelete = {handleDelete} />} />
        </Route>
        <Route path = 'about' element = {<About />} />
        <Route path = '*' element = {<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


{/* <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/newpost">NewPost</Link>
          </li>
          <li>
            <Link to = "/postpage">PostPage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/newpost" element = {<NewPost />} />
        <Route path = "/postpage" element = {<PostLayout />}>
          <Route index element = {<PostPage />} />
          <Route path = ":id" element = {<Post />} />
          <Route path = "newpost" element = {<NewPost />} />
        </Route>
        <Route path = "*" element = {<Missing />} />
      </Routes> */}
