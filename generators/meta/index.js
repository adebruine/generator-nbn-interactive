const Generator = require('yeoman-generator');
const S = require('string');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('title', {
      type: String,
      required: true,
      desc: 'Project title',
    });
  }

  writing() {
    this.title = this.options.title;
    this.slug = S(this.title).slugify().s;

    const timestamp = new Date();
    const publishPath = `${timestamp.getFullYear()}/${this.slug}/`;
    const url = `http://apps.northbynorthwestern.com/${publishPath}`;

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('./.gitignore'));

    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'));

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        slug: this.slug,
        userName: this.user.git.name(),
        userEmail: this.user.git.email(),
      });

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        slug: this.slug,
        title: this.title,
        userName: this.user.git.name(),
        userEmail: this.user.git.email(),
        url,
        year: timestamp.getFullYear(),
      });

    const metaJSON = {
      id: (Math.floor(Math.random() * 100000000000) + 1).toString(),
      publishPath,
      url,
      timestamp: '2017-04-13T08:13-0400',
      dateline: '04/13/17 08:13 PM EDT',
      share: {
        fbook: {
          card_title: this.title,
          card_description: 'The latest from NBN.',
        },
        twitter: {
          card_title: this.title,
          share_tweet: 'The latest news from NBN.',
          card_description: 'The latest news from NBN.',
          author: '@nbn_tweets',
        },
        image: {
          url: `${url}images/share.jpg`,
          alt: '<Text>',
          type: 'image/jpeg',
          width: '600',
          height: '300',
        },
        keywords: 'NBN, NBNteractive, Northwestern',
      },
    };

    this.fs.writeJSON('meta.json', metaJSON);
  }

};
