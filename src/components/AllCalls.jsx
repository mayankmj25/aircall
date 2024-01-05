import React from 'react';
import Flexbox from '../Flexbox.jsx';
import { RiFolderUploadFill } from "react-icons/ri";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { CgVoicemailO } from "react-icons/cg";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";




const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
};

const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(undefined, { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
  };
  

  const groupCallsByDate = (allCalls) => {
    return allCalls.reduce((acc, call) => {
      // Check if the call is not archived before grouping
      if (call.is_archived === false) {
        const date = formatDate(call.created_at);
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(call);
      }
      return acc;
    }, {});
  };
  

const CallItem = ({call}) => {
    return <Flexbox key={call?.id} className='call_item' justifyContent='space-between' alignItems='center'>
        <Flexbox alignItems='center'>
            <Flexbox style={{marginRight: 20}}>
                {call?.call_type ==='missed' && <HiOutlinePhoneMissedCall size={20}/> || call?.call_type ==='voicemail' && <CgVoicemailO size={20}/> || call?.call_type ==='answered' && <MdOutlinePhoneCallback size={20}/>
                ||  <FiPhoneCall size={18} />            }
            </Flexbox>
            <Flexbox flexDirection='column' justifyContent='space-between'>
                <Flexbox style={{fontWeight: 'bold'}}>
                {call?.via || 'unknown'} 
                </Flexbox>
                <Flexbox style={{color: 'gray', paddingTop: '4px'}}>
                duration : {call?.duration}
                </Flexbox>
            </Flexbox>
        </Flexbox>
            <Flexbox style={{color: 'gray'}} alignItems='center'>
                {formatTime(call?.created_at)}
                <RiFolderUploadFill size={20} style={{marginLeft: 12}}/>
            </Flexbox>
        </Flexbox>
}



const AllCalls = ({ allCalls }) => {
  const callsGroupedByDate = groupCallsByDate(allCalls);

  return (
    <Flexbox flexDirection='column' style={{width: '100%'}}>
      <Flexbox className='archieve_all' justifyContent='center' alignItems='center'>
      <RiFolderUploadFill size={16} style={{marginRight: 8}}/>
      Archieve All Calls
      </Flexbox>
      {Object.entries(callsGroupedByDate).map(([date, calls]) => (
        <Flexbox key={date} flexDirection='column' className='date_group'>
          <Flexbox className='date_header' justifyContent='center'>{date}</Flexbox>
          {calls.map((call) => (
            <CallItem key={call.id} call={call} />
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default AllCalls;
