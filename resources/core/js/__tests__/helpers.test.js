import { getParameterByName, extractSizeFromUrl, cleanTitle, snippetText } from '../helpers';

test('getParameterByName functionality', () => {
  expect(getParameterByName('page', '?page=2')).toEqual(2);
  expect(getParameterByName('page', '?page=3')).toEqual(3);
});

test('extractSizeFromUrl functionality', () => {
  expect(
    extractSizeFromUrl(
      'https://media.graphcms.com/resize=w:500,h:380,fit:crop,align:faces/compress=metadata:true/output=strip:true,f:jpg/quality=value:70/vUMNaNA8QbCygMxb4r5Y'
    )
  ).toEqual('500x380');
});

test('cleanTitle functionality', () => {
  expect(cleanTitle('CH&Co Group: Senior HR Advisor')).toEqual('Senior HR Advisor');
});

test('snippetText functionality', () => {
  expect(
    snippetText(
      `
  24000:

  CH&Co Group:
  We are CH&CO, a group of chefs, nutritionists and people pleasers with a shared passion for food that fuels emotional positivity as well as physical wellbeing. In a world where what we consume is becoming ever faster and more disposable, we’r
  Head Office - Reading
  `,
      120
    )
  ).toEqual(
    `24000: CH&Co Group: We are CH&CO, a group of chefs, nutritionists and people pleasers with a shared passion for food th`
  );
});
