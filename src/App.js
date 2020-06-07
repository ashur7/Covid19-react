import React from 'react';
import { Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { Grid } from '@material-ui/core';



class App extends React.Component{
    state= {  
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState( { data: fetchedData } );
        
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);

       
        
        // set the state

        this.setState( { data: fetchedData, country: country } );

    }

    render(){
        return(
            <div>
                
               
                
            <Grid container direction="column">
            
                <Grid item  >
                        <CountryPicker handleCountryChange={this.handleCountryChange} />
                    </Grid>
                  
                    <Grid item xs={12}>
                        <Cards data={this.state.data} />
                    </Grid>

            </Grid>       

                
                
            </div>
        );
    }
}

export default App;