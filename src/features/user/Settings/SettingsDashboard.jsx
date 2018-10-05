import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import SettingsNav from './SettingsNav';
import BasicsPage from './BasicsPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';


const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12} >
        <Switch>
          <Route path='/settings/basics' component={BasicsPage}/>
          <Route path='/settings/about' component={AboutPage}/>
          <Route path='/settings/photos' component={PhotosPage}/>
          <Route path='/settings/account' component={AccountPage}/>
        </Switch>
      </Grid.Column>
      <Grid.Column width={4} >
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashboard
