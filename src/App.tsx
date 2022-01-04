import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route, withRouter} from 'react-router';
import SinglePlayer from "./Pages/SinglePlayer";
import MultiplayerGmae from "./Pages/MultiplayerGmae";
const App = () => {
    return (

        <Switch>
            <Route path={'/number-game'} exact component={SinglePlayer} />
            <Route path={'/multiplayer'} exact component={MultiplayerGmae} />
        </Switch>

  );
}

export default withRouter(App);
