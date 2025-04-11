import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Title from '$lib/components/typography/Title.svelte';

describe('Title', () => {
	it('renders the given text', () => {
		const { getByText } = render(Title, { props: { text: 'Hello World' } });
		expect(getByText('Hello World')).toBeInTheDocument();
	});

	it('applies default classes', () => {
		const { container } = render(Title, { props: { text: 'Test Title' } });
		const h1 = container.querySelector('h1');
		// Check that default classes are applied
		expect(h1?.className).toContain('text-bruma');
		expect(h1?.className).toContain('text-5xl');
	});

	it('merges custom class with default classes', () => {
		const { container } = render(Title, {
			props: { text: 'Custom Class Title', className: 'text-red-500 font-bold' }
		});
		const h1 = container.querySelector('h1');

		expect(h1?.className).toContain('text-red-500');
		expect(h1?.className).toContain('font-bold');

		expect(h1?.className).toContain('text-5xl');
		expect(h1?.className).not.toContain('text-bruma');
	});
});
