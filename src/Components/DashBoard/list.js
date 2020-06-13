import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";


import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import TranslateIcon from '@material-ui/icons/Translate';
import FlareIcon from '@material-ui/icons/Flare';
import ExposureIcon from '@material-ui/icons/Exposure';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HomeIcon from '@material-ui/icons/Home';
import { Link ,useCurrentRoute} from 'react-navi'



function MainListItemsSideBar(props) {
    let url  = "/mysuperday/dashboard";

    return (
        <div>
            <Link href={url + '/'} className={props.style.link}>
                <div className={props.style.homeDivButton} onClick={() => {
                    props.setTitleName("Vue d'ensemble")
                }}>
                    <HomeIcon className={props.style.homeButton}/>
                </div>
            </Link>

            <div className={props.style.toolbar}/>
            <Divider/>


            <List>
                <Link href={`${url}/horoscope`} className={props.style.link}>
                    <ListItem button onClick={() => {
                        props.setTitleName("Horoscope")
                    }}>
                        <ListItemIcon> <FlareIcon/></ListItemIcon>
                        <ListItemText primary={"Horoscope"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/biorythme`} className={props.style.link}>
                    <ListItem button onClick={() => {
                        props.setTitleName("Biorythme")
                    }}>
                        <ListItemIcon> <FingerprintIcon/></ListItemIcon>
                        <ListItemText primary={"Biorythme"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/traducteur`} className={props.style.link}>
                    <ListItem button onClick={() => {
                        props.setTitleName("Traducteur")
                    }}>
                        <ListItemIcon> <TranslateIcon/></ListItemIcon>
                        <ListItemText primary={"Traducteur"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/agenda`} className={props.style.link}>
                    <ListItem button onClick={() => {
                        props.setTitleName("Agenda")
                    }}>
                        <ListItemIcon> <ScheduleIcon/></ListItemIcon>
                        <ListItemText primary={"Agenda"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/calculatrice`} className={props.style.link}>
                    <ListItem button onClick={() => {
                        props.setTitleName("Calculatrice")
                    }}>
                        <ListItemIcon> <ExposureIcon/></ListItemIcon>
                        <ListItemText primary={"Calculatrice"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/blocNote`} className={props.style.link}>
                    <ListItem button onClick={(e) => {
                        props.setTitleName("Bloc notes")
                    }}>
                        <ListItemIcon> <AssignmentIcon/></ListItemIcon>
                        <ListItemText primary={"Bloc notes"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/meteo`} className={props.style.link}>
                    <ListItem button onClick={(e) => {
                        props.setTitleName("Météo")
                    }}>
                        <ListItemIcon> <WbSunnyIcon/></ListItemIcon>
                        <ListItemText primary={"Météo"}/>
                    </ListItem>
                </Link>
                <Link href={`${url}/bourse`} className={props.style.link}>
                    <ListItem button onClick={(e) => {
                        props.setTitleName("Bourse")
                    }}>
                        <ListItemIcon> <AccountBalanceIcon/></ListItemIcon>
                        <ListItemText primary={"Bourse"}/>
                    </ListItem>
                </Link>
            </List>


        </div>
    );

}

export default MainListItemsSideBar;




