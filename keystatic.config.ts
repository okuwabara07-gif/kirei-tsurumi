import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: '美容コラム',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'タイトル' } }),
        date: fields.date({ label: '公開日' }),
        description: fields.text({ label: '説明文', multiline: true }),
        category: fields.select({
          label: 'カテゴリ',
          options: [
            { label: '白髪染め', value: '白髪染め' },
            { label: 'ヘアケア', value: 'ヘアケア' },
            { label: 'トレンド', value: 'トレンド' },
            { label: 'オーガニック', value: 'オーガニック' },
            { label: 'グレイヘア', value: 'グレイヘア' },
            { label: '40代・50代', value: '40代・50代' },
            { label: '鶴見・横浜', value: '鶴見・横浜' },
            { label: 'サロン体験', value: 'サロン体験' },
            { label: 'お客様の声', value: 'お客様の声' },
          ],
          defaultValue: '白髪染め',
        }),
        content: fields.markdoc({ label: '本文' }),
      },
    }),
  },
});
