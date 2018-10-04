import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingNav from './SettingsNav';

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12} >
        <h1>Settings</h1>
      </Grid.Column>
      <Grid.Column width={4} >
        <SettingNav />
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashboard
