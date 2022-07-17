// packages
import { test, expect } from '@playwright/test';

// types
import type CustomElementElement from '../src/custom-element.js';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test.describe('element creation', () => {
	test('creates from document.createElement', async ({ page }) => {
		const elementHandle = await page.evaluateHandle(() =>
			document.createElement('custom-element'),
		);

		expect(await elementHandle.evaluate((element) => element.nodeName)).toBe(
			'CUSTOM-ELEMENT',
		);
	});

	test('creates from constructor', async ({ page }) => {
		const elementHandle = await page.evaluateHandle(() => {
			return new window.CustomElementElement();
		});

		expect(await elementHandle.evaluate((element) => element.nodeName)).toBe(
			'CUSTOM-ELEMENT',
		);
	});
});

test.describe('after tree insertion', () => {
	test('initializes', async ({ page }) => {
		const locator = await page.locator('custom-element');

		expect(await locator.textContent()).toBe('Hello!');
	});
});
