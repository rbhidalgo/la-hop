// // import React, { Component } from 'react'

// // import DateTimePickerDays from 'react-bootstrap-datetimepicker'

// // class DatePicker extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //           date: "1990-06-05",
// //           format: "YYYY-MM-DD",
// //           inputFormat: "DD/MM/YYYY",
// //           mode: "date"
// //         };
// //       }
    
// //       handleChange = (newDate) => {
// //         console.log("newDate", newDate);
// //         return this.setState({date: newDate});
// //       }
    
// //       render() {
// //         const {date, format, mode, inputFormat} = this.state;
// //         return <DateTimePickerDays
// //           dateTime={date}
// //           format={format}
// //           viewMode={mode}
// //           sideByside={true}
// //           inputFormat={inputFormat}
// //           onChange={this.handleChange}
// //         />;
// //       }
// //     }



// import React from 'react'
// // import DateTimePicker from 'react-bootstrap-date-time-picker'
// import DateTimeField from 'react-bootstrap-datetimepicker'

// // import  from 'react-bootstrap-datetimepicker'


// const DatePicker = () => 
// <DateTimeField

// />


// export default DatePicker

import React from 'react'
import { DateTime } from 'react-datetime-bootstrap';
// import { DatePicker } from 'react-bootstrap-date-time-picker'

 
const DatePicker = (props) => (
    <div>
        <h4>Date Picker</h4>
        <DateTime/>
        {/* <h4>Provide a value</h4> */}
        {/* <DateTime value="2017-04-20"/> */}
        {/* <h4>Format (See momentjs for available formats)</h4> */}
        {/* <DateTime pickerOptions={{format:"LL"}} value="2017-04-20"/> */}
        {/* <h4>Time Only</h4> */}
        {/* <DateTime pickerOptions={{format:"LTS"}}/> */}
        {/* <DatePicker /> */}
    </div>
);

export default DatePicker