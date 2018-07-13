import React, {Component} from 'react';
import MyEvent from './MyEvent';

class Events extends Component{
    render(){
        return(
            <main>
                 <div class="row">
                    <MyEvent ticketname="NACOSS 2018 Dinner"
                    ticketdescription="Computer Science Department of Uniosun Dinner Night"
                    pic="https://materializecss.com/images/sample-1.jpg"/>
                    <MyEvent ticketname="NAPHS 2018 Dinner"
                    ticketdescription="Public Health Department of Uniosun Dinner Night"
                    pic="https://materializecss.com/images/sample-1.jpg"/>
                    <MyEvent ticketname="KK 2018 Dinner"
                    ticketdescription="Public Department of Uniosun Dinner Night"
                    pic="https://materializecss.com/images/sample-1.jpg"/>
                    <MyEvent ticketname="BB 2018 Dinner"
                    ticketdescription="Public Department of Uniosun Dinner Night"
                    pic="https://materializecss.com/images/sample-1.jpg"/>
                    <MyEvent ticketname="BB 2018 Dinner"
                    ticketdescription="Public Department of Uniosun Dinner Night"
                    pic="https://materializecss.com/images/sample-1.jpg"/>


                </div>
            </main>
        )
    }
} 
export default Events;