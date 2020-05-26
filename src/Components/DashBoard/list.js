import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import React from "react";

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import TranslateIcon from '@material-ui/icons/Translate';


export default function MainListItemsSideBar(props){

    return (
        <div>
            <div className={props.style.toolbar} />
            <Divider/>
            <List>

                <ListItem button>
                    <ListItemIcon> <MailIcon/></ListItemIcon>
                    <ListItemText primary={"Horosocope"}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <WbSunnyIcon/></ListItemIcon>
                    <ListItemText primary={"Météo"}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <FingerprintIcon/></ListItemIcon>
                    <ListItemText primary={"Biorythme"}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <TranslateIcon/></ListItemIcon>
                    <ListItemText primary={"Traducteur"}/>
                </ListItem>

            </List>
        </div>
    );

}





