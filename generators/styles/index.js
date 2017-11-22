const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('src/scss/_bootstrap.scss'),
      this.destinationPath('src/scss/_bootstrap.scss'));

// NBN STYLES
    //layout:
    this.fs.copy(
      this.templatePath('src/scss/layout/_banner.scss'),
      this.destinationPath('src/scss/layout/_banner.scss'));
    this.fs.copy(
      this.templatePath('src/scss/layout/_footer.scss'),
      this.destinationPath('src/scss/layout/_footer.scss'));
    this.fs.copy(
      this.templatePath('src/scss/layout/_images.scss'),
      this.destinationPath('src/scss/layout/_images.scss'));
    this.fs.copy(
      this.templatePath('src/scss/layout/_layout.scss'),
      this.destinationPath('src/scss/layout/_layout.scss'));
    this.fs.copy(
      this.templatePath('src/scss/layout/_masthead.scss'),
      this.destinationPath('src/scss/layout/_masthead.scss'));
    this.fs.copy(
      this.templatePath('src/scss/layout/_prose.scss'),
      this.destinationPath('src/scss/layout/_prose.scss'));
    this.fs.copy(
      this.templatePath('src/scss/layout/_quotes.scss'),
      this.destinationPath('src/scss/layout/_quotes.scss'));
    // helpers:
    this.fs.copy(
      this.templatePath('src/scss/helpers/_colors.scss'),
      this.destinationPath('src/scss/helpers/_colors.scss'));
    this.fs.copy(
      this.templatePath('src/scss/helpers/_functions.scss'),
      this.destinationPath('src/scss/helpers/_functions.scss'));
    this.fs.copy(
      this.templatePath('src/scss/helpers/_mixins.scss'),
      this.destinationPath('src/scss/helpers/_mixins.scss'));
    this.fs.copy(
      this.templatePath('src/scss/helpers/_placeholders.scss'),
      this.destinationPath('src/scss/helpers/_placeholders.scss'));
    this.fs.copy(
      this.templatePath('src/scss/helpers/_variables.scss'),
      this.destinationPath('src/scss/helpers/_variables.scss'));
    //theme:
    this.fs.copy(
      this.templatePath('src/scss/theme/_theme.scss'),
      this.destinationPath('src/scss/theme/_theme.scss'));

}


  }
  install() {
    const dependencies = [
      'bootstrap-sass',
    ];
    this.yarnInstall(dependencies, { save: true });
  }
};
