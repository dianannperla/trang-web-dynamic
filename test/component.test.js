import { Component } from '../index';

describe('Component', () => {
    it('should create a component with the given title', () => {
        const component = new Component({ title: 'Test Title' });
        expect(component.title).toBe('Test Title');
    });
});