import { render, screen } from '@testing-library/svelte';
import AdminPage from '../../../routes/(admin)/+page.svelte';

describe('Admin Page', () => {
	it('should display an overview section', () => {
		render(AdminPage);
		expect(screen.getByText('Overview')).toBeInTheDocument();
		expect(screen.getByText('Total Saving')).toBeInTheDocument();
		expect(screen.getByText('Current Month Saving')).toBeInTheDocument();
	});
});
