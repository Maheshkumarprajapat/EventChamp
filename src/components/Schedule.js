import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import ScheduleDay1 from './ScheduleDay1';
import ScheduleDay2 from './ScheduleDay2';
import ScheduleDay3 from './ScheduleDay3';


export default function Schedule() {
    return (
        <>
            <div className="schedule_section">
                <div className="schedule_tabs tab">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="scheduleday1" title="Day1">
                            <ScheduleDay1 />
                        </Tab>

                        <Tab eventKey="scheduleday2" title="Day2">
                            <ScheduleDay2 />
                        </Tab>
                        <Tab eventKey="scheduleday3" title="Day3">
                            <ScheduleDay3 />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
