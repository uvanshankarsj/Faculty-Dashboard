import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
    const defaultDate = moment(new Date()).format("YYYY-MM-DD");
    const [eventsData, setEventsData] = useState([])
    const [fac, setFac] = useState()
    const emailId = localStorage.getItem("email")

    useEffect(() => {
        axios.get(`http://localhost:6969/api/events/faculty/email/${emailId}`).then((res) => {
            console.log(res.data)
            setEventsData(res.data.events)
            setFac(res.data.facultyId)
        })
    }, [emailId])
    const handleSelect = async ({ start, end , date }) =>{
        const title = window.prompt("New Event name");
        console.log(start,end,date)
        const fdate = moment(date).format("YYYY-MM-DD")
        const startDate = moment(start).format("YYYY-MM-DD")
        const endDate = moment(end).format("YYYY-MM-DD")
        const startTime = moment(start).format("HH:mm:ss")
        const endTime = moment(end).format("HH:mm:ss")
        console.log(fdate,startDate,endDate,startTime,endTime)
        if (title) {
            setEventsData([...eventsData, { start, end, title }]);
            const event = {
                name: title,
                date : fdate,
                facultyId: fac,
                startTime: startTime,
                endTime: endTime,
            }
            console.log(event)
            axios.post(`http://localhost:6969/api/events`, event).then((res) => {
                console.log(res)
            })
        }
    }
    return (
        <div className="calendar">
            <Sidebar />
            <div className="calendar-wrapper">
                <Navbar/>
                <Calendar
                    views={[ "agenda","month"]}
                    selectable
                    localizer={localizer}
                    defaultDate={defaultDate}
                    defaultView="month"
                    events={eventsData}
                    startAccessor= 'date'
                    endAccessor='date'
                    titleAccessor='name'
                    style={{ height: "100vh", width: "80vw", marginLeft: "30px" }}
                    onSelectEvent={(deleteEvent) => {
                        const confirm = window.confirm(
                            `Are you sure you want to delete ${deleteEvent.title}`
                        );
                        if (confirm) {
                            setEventsData(eventsData.filter((event) => event !== deleteEvent));
                            console.log(deleteEvent.eventId)
                            const id = deleteEvent.eventId;
                            axios.delete(`http://localhost:6969/api/events/${id}`).then((res) => {
                                console.log(res)
                            }
                            )
                        }
                    }}
                    onDoubleClickEvent={(event) => {
                        const title = window.prompt("Change Event name", event.title);
                        if (title) {
                            setEventsData(
                                eventsData.map((e) => (e === event ? { ...event, title } : e))
                            );
                        }
                    }}
                    onSelectSlot={handleSelect}
                />
            </div>
        </div>
    );
}
