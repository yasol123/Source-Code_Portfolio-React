import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Resume',
        path:'/Resume',
        icon:<IoIcons.IoMdPeople />,
        cName:'nav-text'
    },
    {
        title:'Projects',
        path:'/Projects',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'Contact Me',
        path:'/Contact',
        icon:<MdIcons.MdContactMail />,
        cName:'nav-text'
    }
]