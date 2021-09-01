import React, { useEffect, useState } from 'react'
import Createcollection from './components/Createcollection'
import Navbar from './components/Navbar'
import Nftcreator from './components/Nftcreator'
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from './components/Home'
import Midline from './components/Midline'
import data from './components/Pdata';
import Carosel from './components/Carosel'
import Chart from './components/Chart'
import Savenft from './components/Savenft'
import Assetcreator from './components/Assetcreator'
import ScrollToTop from './components/ScrollToTop'
import Assetdetail from './components/Assetdetail'
import Explore from './components/Explore'
import Carosel2 from './components/Carosel2'
import Explore2 from './components/Explore2'
import Web3 from 'web3'
import Searchpage from './components/Searchpage'
import Searchasset from './components/Searchasset'
import CSDoge from './components/CSDoge'
import CSdogecreate from './components/CSdogecreate'
// import nft from '../abi/nft.json'


function App() {
  const [accountid, setaccountid] = useState()
  // console.log('accountid', accountid)

  useEffect(async() => {
    const accounts1 = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setaccountid(accounts1)
    if (window.ethereum) {
      async function getAccount() {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        // do something with new account here
        // alert('accont changed')
        window.location.reload()






      }

      window.ethereum.on('accountsChanged', function (accounts) {
        getAccount();
      })
    }
  }, [])
  const collection = JSON.parse(localStorage.getItem('alliddatacol'))
  // console.log('aall', collection)
  // const asset = JSON.parse(localStorage.getItem('alliddatasset'))
  const [searchdata, setsearchdata] = useState()
  const history = useHistory()
  const searchclick = (data) => {
    if (data !== "") {
      setsearchdata(data)
      history.push(`/search/${data}`)



    } else {
      history.push(`/`)


    }



  }

  return (
    <Switch>

      <div className="App">
        <ScrollToTop />
        <Navbar searchsub={(data) => searchclick(data)} />
        <Route exact path="/">

          <Home />
          <Midline />
          {/* <Carologic/> */}
          <Carosel sdata={searchdata} title={"Collections"} />
          <Carosel2 />
          {/* <Cone  title={"Collections"} /> */}
          <Chart />
        </Route>
        <Route exact path="/create">
          {/* <Navbar /> */}
          <Nftcreator type="create" />

        </Route>
        <Route exact path="/mycollection">
          {/* <Navbar /> */}
          <Nftcreator type="mycol" />

        </Route>

        <Route path="/createcollection">
          {/* <Navbar /> */}
          <Createcollection />

        </Route>
        <Route path='/savenft/:nftid'>
          {/* <Navbar /> */}
          <Savenft />
        </Route>
        <Route path='/createasset/:nftid'>
          {/* <Navbar /> */}
          <Assetcreator />
        </Route>
        <Route path='/assetdetail/:assetid'>
          {/* <Navbar /> */}
          <Assetdetail />
        </Route>
        <Route path='/explore'>
          {/* <Navbar /> */}
          <Explore />
        </Route>
        <Route path='/exploreaauc'>
          {/* <Navbar /> */}
          <Explore2 />
        </Route>
        <Route path="/search/:type">
          <Searchpage sdata={searchdata} />
        </Route>
        <Route path="/searcha">
          <Searchasset sdata={searchdata} />
        </Route>
        <Route path="/csdoge">
          
          <CSDoge/>
        </Route>
        <Route path="/csdogecreate">
          {/* <CSdogecreate/> */}
        </Route>

      </div>

    </Switch>

  );
}

export default App;
