module.exports = {
  components: 'src/components/**/*.vue',
  defaultExample: true,
  webpackConfig: require('./build/webpack.base.conf'),
  showUsage: true,
  sections: [
    {
      name: 'Layout',
      content: 'src/components/layout/layout.md',
      components: function() {
        return [
          'src/components/layout/row.vue',
          'src/components/layout/flex.vue'
        ]
      }
    },
    {
      name: 'UI',
      content: 'src/components/ui/ui.md',
      components: function() {
        return [
          'src/components/ui/checkbox.vue',
          'src/components/ui/textfield.vue'
        ]
      }
    }
  ]
};
