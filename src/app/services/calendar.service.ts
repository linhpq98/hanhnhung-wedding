import { Injectable } from '@angular/core';
import _ from 'lodash';
import { EVENT_INFO_FEMALE, EVENT_INFO_LE_AN_HOI, EVENT_INFO_LE_CUOI, EVENT_INFO_MALE } from '../shared/constants';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    constructor() {}

    genGoogleCalendarLink(eventData: any, event: string) {
        let baseUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit';

        let text = encodeURIComponent('💍Lễ Thành Hôn \n 💞Minh Hạnh & Tuệ Nhung💞');
        let details = encodeURIComponent(
            '<h3>💍Lễ Thành Hôn Minh Hạnh & Tuệ Nhung💍</h3> Sự có mặt của bạn là niềm vinh dự với vợ chồng chúng mình ❤️\nRất hân hạnh được đón tiếp!\n\n📲Liên hệ chú rể: 0348625177\n📲Liên hệ cô dâu: 0348625177\nWebsite: hanhnhungwedding.info'
        );
      if(event == "le_cuoi"){
        text = encodeURIComponent('💍Lễ CƯỚI \n 💞Minh Hạnh & Tuệ Nhung💞');
        details = encodeURIComponent(
          '<h3>💍Lễ Cưới Minh Hạnh & Tuệ Nhung💍</h3> Sự có mặt của bạn là niềm vinh dự với vợ chồng chúng mình ❤️\nRất hân hạnh được đón tiếp!\n\n📲Liên hệ chú rể: 0348625177\n📲Liên hệ cô dâu: 0348625177\nWebsite: hanhnhungwedding.info'
        );
      }else if(event == "le_an_hoi"){
        text = encodeURIComponent('💍Lễ ĂN HỎI \n 💞Minh Hạnh & Tuệ Nhung💞');
        details = encodeURIComponent(
          '<h3>💍Lễ ĂN HỎI Minh Hạnh & Tuệ Nhung💍</h3> Sự có mặt của bạn là niềm vinh dự với vợ chồng chúng mình ❤️\nRất hân hạnh được đón tiếp!\n\n📲Liên hệ chú rể: 0348625177\n📲Liên hệ cô dâu: 0348625177\nWebsite: hanhnhungwedding.info'
        );
      }else if(event == "le_vu_quy_male"){
        text = encodeURIComponent('💍Lễ Thành Hôn \n 💞Minh Hạnh & Tuệ Nhung💞');
        details = encodeURIComponent(
          '<h3>💍Lễ Thành Hôn Minh Hạnh & Tuệ Nhung💍</h3> Sự có mặt của bạn là niềm vinh dự với vợ chồng chúng mình ❤️\nRất hân hạnh được đón tiếp!\n\n📲Liên hệ chú rể: 0348625177\n📲Liên hệ cô dâu: 0348625177\nWebsite: hanhnhungwedding.info'
        );
      }else {
        text = encodeURIComponent('💍Lễ Vu Quy \n 💞Minh Hạnh & Tuệ Nhung💞');
        details = encodeURIComponent(
          '<h3>💍Lễ Vu Quy Minh Hạnh & Tuệ Nhung💍</h3> Sự có mặt của bạn là niềm vinh dự với vợ chồng chúng mình ❤️\nRất hân hạnh được đón tiếp!\n\n📲Liên hệ chú rể: 0348625177\n📲Liên hệ cô dâu: 0348625177\nWebsite: hanhnhungwedding.info'
        );
      }

        let location = encodeURIComponent(eventData.LOCATION);
        let dates = encodeURIComponent(`${eventData.START_TIME}/${eventData.END_TIME}`);

        let params = `text=${text}&details=${details}&location=${location}&dates=${dates}`;

        return `${baseUrl}?${params}`;
    }

    downloadICSFile(eventData: any) {
        const icsContent = `BEGIN:VCALENDAR
PRODID:-//Hạnh Nhung Wedding//hanhnhungwedding.com//EN
VERSION:2.0
BEGIN:VTIMEZONE
TZID:Asia/Ho_Chi_Minh
BEGIN:STANDARD
DTSTART:19750612T230000
TZOFFSETFROM:+0700
TZOFFSETTO:+0700
TZNAME:+07
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:20240102T135028Z
STATUS:CONFIRMED
UID:${eventData.UID}
SEQUENCE:0
DTSTART;TZID=Asia/Ho_Chi_Minh:${eventData.START_TIME}
DTEND;TZID=Asia/Ho_Chi_Minh:${eventData.END_TIME}
SUMMARY:💍Lễ Thành Hôn\\n💞Minh Hạnh & Tuệ Nhung💞
DESCRIPTION:💍Lễ Thành Hôn Minh Hạnh & Tuệ Nhung💍 \\nSự có mặt của bạn là niềm vinh dự với vợ chồng chúng mình ❤️\\nRất hân hạnh được đón tiếp!\\n\\n📲Liên hệ chú rể: 0348625177\\n📲Liên hệ cô dâu: 0348625177\\nWebsite: hanhnhungwedding.info
X-ALT-DESC;FMTTYPE=text/html:Lễ Thành Minh Hạnh & Tuệ Nhung
LOCATION:📍${eventData.LOCATION}
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'event.ics');
        document.body.appendChild(link);
        link.click();
    }
}
