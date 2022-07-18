import { defineTest } from 'jscodeshift/dist/testUtils';

defineTest(
    __dirname,
    'my-first-transform',
    null,
    'basic',
    { parser: 'babel' },
);