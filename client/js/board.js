import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.board.helpers({
    sideLength: () => {
        let side = new Array(3);
        side.fill(0);

        return side;
    }
});