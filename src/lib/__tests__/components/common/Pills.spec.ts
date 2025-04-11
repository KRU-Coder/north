import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Pills from '$lib/components/common/Pills.svelte';
import UpArrow from '$lib/components/icons/UpArrow.svelte';

describe('Pills Component', () => {
	it('renders the text correctly', () => {
		const { getByText } = render(Pills, {
			props: { text: 'Hello, World' }
		});
		expect(getByText('Hello, World')).toBeInTheDocument();
	});

	it('applies the custom className correctly', () => {
		const { container } = render(Pills, {
			props: { text: 'Styled Text', className: 'text-red-500' }
		});
		const div = container.querySelector('div');
		expect(div?.className).toContain('text-red-500');
	});

	it('conditionally renders the icon when passed', () => {
		const { container } = render(Pills, {
			props: { text: 'With Icon', icon: UpArrow }
		});
		const iconComponent = container.querySelector('svg');
		expect(iconComponent).toBeInTheDocument();
	});

	it('does not render the icon when icon is not passed', () => {
		const { container } = render(Pills, {
			props: { text: 'No Icon' }
		});
		const iconComponent = container.querySelector('svelte-component');
		expect(iconComponent).toBeNull();
	});

	it('applies default classes correctly', () => {
		const { container } = render(Pills, {
			props: { text: 'Default Classes' }
		});
		const div = container.querySelector('div');
		// Check that default classes are applied
		expect(div?.className).toContain('inline-flex');
		expect(div?.className).toContain('items-center');
		expect(div?.className).toContain('gap-2');
		expect(div?.className).toContain('rounded-md');
		expect(div?.className).toContain('bg-red-900');
		expect(div?.className).toContain('px-3');
		expect(div?.className).toContain('py-1');
		expect(div?.className).toContain('text-base');
		expect(div?.className).toContain('text-white');
	});
});
