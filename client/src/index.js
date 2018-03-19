import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

//components
import ForumIndex from './components/forum_index';
import CategoryIndex from './components/category_index';
import Navbar from './components/navbar';
import Breadcrumbs from './components/breadcrumbs';
import CreateCategory from './components/create_category';
import CreateThread from './components/create_thread';
import ShowThread from './components/show_thread';

//reducers
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Navbar />
                <Breadcrumbs />
                <Switch>
                    <Route path="/category/:cat_id/thread/create" component={CreateThread} />
                    <Route path="/category/thread/:thread_id" component={ShowThread} />
                    <Route path="/category/create" component={CreateCategory} />
                    <Route path="/category/:cat_id" component={CategoryIndex} />
                    <Route path="/" component={ForumIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
