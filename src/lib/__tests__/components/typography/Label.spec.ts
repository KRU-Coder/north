import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Label from '$lib/components/typography/Label.svelte';

describe('Label', () => {
	it('renders the given text', () => {
		const { getByText } = render(Label, { props: { text: 'Hello' } });
		expect(getByText('Hello')).toBeInTheDocument();
	});

	it('applies default classes', () => {
		const { container } = render(Label, { props: { text: 'Test' } });
		const p = container.querySelector('p');
		expect(p?.className).toContain('text-dark-gray');
		expect(p?.className).toContain('text-xs');
	});

	it('merges custom class with default classes', () => {
		const { container } = render(Label, {
			props: { text: 'Test', className: 'text-red-500 font-bold' }
		});
		const p = container.querySelector('p');
		expect(p?.className).toContain('text-red-500');
		expect(p?.className).toContain('font-bold');
		expect(p?.className).toContain('text-xs');
	});
});
