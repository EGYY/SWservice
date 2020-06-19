import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import './item-list.css';

const ItemList = () => {
    return(
        <div className="item-list">
            <List component="nav" aria-label="contacts">
                <ListItem button>
                    <ListItemText primary="Chelsea Otakan" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Eric Hoffman" />
                </ListItem>
            </List>
        </div>
    );
}

export default ItemList;