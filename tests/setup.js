import { expect, afterEach } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/svelte';

expect.extend(matchers);

afterEach(() => {
	cleanup();
});