import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Overline from '$lib/components/typography/Overline.svelte';

describe('Overline', () => {
	it('renders the given text', () => {
		const { getByText } = render(Overline, { props: { text: 'Hello World' } });
		expect(getByText('Hello World')).toBeInTheDocument();
	});

	it('applies default classes', () => {
		const { container } = render(Overline, { props: { text: 'Test Paragraph' } });
		const p = container.querySelector('p');
		// Check that default classes are applied
		expect(p?.className).toContain('text-bruma');
	});

	it('merges custom class with default classes', () => {
		const { container } = render(Overline, {
			props: { text: 'Custom Class Paragraph', className: 'text-red-500 font-bold' }
		});
		const p = container.querySelector('p');

		// Check that custom classes are merged with default classes
		expect(p?.className).toContain('text-red-500'); // custom class
		expect(p?.className).toContain('font-bold'); // custom class

		// Check that the default class 'text-bruma' is replaced by the custom class 'text-red-500'
		expect(p?.className).not.toContain('text-bruma');
	});
});
