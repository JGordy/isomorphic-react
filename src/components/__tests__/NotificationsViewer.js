import NotificationsViewer from '../NotificationViewer';
import renderer from 'react-test-renderer';
import React from 'react';
import { delay } from 'redux-saga';

jest.mock('../../services/NotificationsService');

// Call this after jest.mock...
const notificationsService = require('../../services/NotificationsService').default;

describe("The notification viewer", () => {
    beforeAll(() => {
        notificationsService.__setCount(5);
    });

    it("should display the correct number of notifications", async () => {
        const tree = renderer.create(
            <NotificationsViewer />
        )
        await delay();
        const instance = tree.root;
        const component = instance.findByProps({className: 'notifications'})
        const text = component.children[0];
        expect(text).toEqual("5 Notifications Awaiting!");
    });
});