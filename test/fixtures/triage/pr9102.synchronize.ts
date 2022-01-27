import { PullRequestSynchronizeEvent } from '@octokit/webhooks-types'

export default {
  action: 'synchronize',
  number: 9102,
  pull_request: {
    url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/9102',
    id: 447750222,
    node_id: 'MDExOlB1bGxSZXF1ZXN0NDQ3NzUwMjIy',
    html_url: 'https://github.com/ohmyzsh/ohmyzsh/pull/9102',
    diff_url: 'https://github.com/ohmyzsh/ohmyzsh/pull/9102.diff',
    patch_url: 'https://github.com/ohmyzsh/ohmyzsh/pull/9102.patch',
    issue_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/9102',
    number: 9102,
    state: 'open',
    locked: false,
    title: 'add never option no confirmation prompt',
    user: {
      login: 'jakobhellermann',
      id: 22177966,
      node_id: 'MDQ6VXNlcjIyMTc3OTY2',
      avatar_url: 'https://avatars2.githubusercontent.com/u/22177966?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jakobhellermann',
      html_url: 'https://github.com/jakobhellermann',
      followers_url: 'https://api.github.com/users/jakobhellermann/followers',
      following_url: 'https://api.github.com/users/jakobhellermann/following{/other_user}',
      gists_url: 'https://api.github.com/users/jakobhellermann/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/jakobhellermann/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/jakobhellermann/subscriptions',
      organizations_url: 'https://api.github.com/users/jakobhellermann/orgs',
      repos_url: 'https://api.github.com/users/jakobhellermann/repos',
      events_url: 'https://api.github.com/users/jakobhellermann/events{/privacy}',
      received_events_url: 'https://api.github.com/users/jakobhellermann/received_events',
      type: 'User',
      site_admin: false
    },
    body: "## Standards checklist:\r\n\r\n- [x] The PR title is descriptive.\r\n- [x] The PR doesn't replicate another PR which is already open.\r\n- [x] I have read the contribution guide and followed all the instructions.\r\n- [x] The code follows the code style guide detailed in the wiki.\r\n- [x] The code is mine or it's from somewhere with an MIT-compatible license.\r\n- [x] The code is efficient, to the best of my ability, and does not waste computer resources.\r\n- [x] The code is stable and I have tested it myself, to the best of my abilities.\r\n\r\n## Changes:\r\n\r\n- change prompt from `Source it? ([Y]es/[n]o/[a]lways)` to  `Source it? ([Y]es/[n]o/[a]lways/n[e]ver)` (I couldn't find a synonym to never which doesn't start with **n**, suggestions welcome)\r\n- add parallel to `ZSH_DOTENV_ALLOWED_LIST`: `ZSH_DOTENV_DISALLOWED_LIST`\r\n- write disallowed dirs to that file and skip sourcing if directory is in that file\r\n- update README\r\n\r\n---\r\n\r\nfixes #9101 ",
    created_at: '2020-07-11T10:21:20Z',
    updated_at: '2020-07-11T12:02:38Z',
    closed_at: null,
    merged_at: null,
    merge_commit_sha: '951665d553e5f46dbe2a1076cd0f5bd490c9c079',
    assignee: null,
    assignees: [

    ],
    requested_reviewers: [

    ],
    requested_teams: [

    ],
    labels: [
      {
        id: 108094,
        node_id: 'MDU6TGFiZWwxMDgwOTQ=',
        url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/labels/Area:%20plugin',
        name: 'Area: plugin',
        color: '0d5b96',
        default: false,
        description: 'Issue or PR related to a plugin'
      },
      {
        id: 349611826,
        node_id: 'MDU6TGFiZWwzNDk2MTE4MjY=',
        url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/labels/Type:%20documentation',
        name: 'Type: documentation',
        color: '0e8a16',
        default: false,
        description: 'Documentation issue or Pull Request'
      }
    ],
    milestone: null,
    draft: false,
    commits_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/9102/commits',
    review_comments_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/9102/comments',
    review_comment_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/comments{/number}',
    comments_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/9102/comments',
    statuses_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/statuses/d771734400f1ffaf7e0bb703cc3df1676241ecc6',
    head: {
      label: 'jakobhellermann:dotenv-confirmation-never',
      ref: 'dotenv-confirmation-never',
      sha: 'd771734400f1ffaf7e0bb703cc3df1676241ecc6',
      user: {
        login: 'jakobhellermann',
        id: 22177966,
        node_id: 'MDQ6VXNlcjIyMTc3OTY2',
        avatar_url: 'https://avatars2.githubusercontent.com/u/22177966?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jakobhellermann',
        html_url: 'https://github.com/jakobhellermann',
        followers_url: 'https://api.github.com/users/jakobhellermann/followers',
        following_url: 'https://api.github.com/users/jakobhellermann/following{/other_user}',
        gists_url: 'https://api.github.com/users/jakobhellermann/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jakobhellermann/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jakobhellermann/subscriptions',
        organizations_url: 'https://api.github.com/users/jakobhellermann/orgs',
        repos_url: 'https://api.github.com/users/jakobhellermann/repos',
        events_url: 'https://api.github.com/users/jakobhellermann/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jakobhellermann/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 278834352,
        node_id: 'MDEwOlJlcG9zaXRvcnkyNzg4MzQzNTI=',
        name: 'ohmyzsh',
        full_name: 'jakobhellermann/ohmyzsh',
        private: false,
        owner: {
          login: 'jakobhellermann',
          id: 22177966,
          node_id: 'MDQ6VXNlcjIyMTc3OTY2',
          avatar_url: 'https://avatars2.githubusercontent.com/u/22177966?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jakobhellermann',
          html_url: 'https://github.com/jakobhellermann',
          followers_url: 'https://api.github.com/users/jakobhellermann/followers',
          following_url: 'https://api.github.com/users/jakobhellermann/following{/other_user}',
          gists_url: 'https://api.github.com/users/jakobhellermann/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/jakobhellermann/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/jakobhellermann/subscriptions',
          organizations_url: 'https://api.github.com/users/jakobhellermann/orgs',
          repos_url: 'https://api.github.com/users/jakobhellermann/repos',
          events_url: 'https://api.github.com/users/jakobhellermann/events{/privacy}',
          received_events_url: 'https://api.github.com/users/jakobhellermann/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/jakobhellermann/ohmyzsh',
        description: '🙃 A delightful community-driven (with 1700+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc), over 140 themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.',
        fork: true,
        url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh',
        forks_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/forks',
        keys_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/teams',
        hooks_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/hooks',
        issue_events_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/issues/events{/number}',
        events_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/events',
        assignees_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/assignees{/user}',
        branches_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/branches{/branch}',
        tags_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/tags',
        blobs_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/languages',
        stargazers_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/stargazers',
        contributors_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/contributors',
        subscribers_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/subscribers',
        subscription_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/subscription',
        commits_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/contents/{+path}',
        compare_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/merges',
        archive_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/downloads',
        issues_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/issues{/number}',
        pulls_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/labels{/name}',
        releases_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/releases{/id}',
        deployments_url: 'https://api.github.com/repos/jakobhellermann/ohmyzsh/deployments',
        created_at: '2020-07-11T09:57:44Z',
        updated_at: '2020-07-11T09:57:48Z',
        pushed_at: '2020-07-11T12:02:38Z',
        git_url: 'git://github.com/jakobhellermann/ohmyzsh.git',
        ssh_url: 'git@github.com:jakobhellermann/ohmyzsh.git',
        clone_url: 'https://github.com/jakobhellermann/ohmyzsh.git',
        svn_url: 'https://github.com/jakobhellermann/ohmyzsh',
        homepage: 'https://ohmyz.sh',
        size: 6974,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz'
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false
      }
    },
    base: {
      label: 'ohmyzsh:master',
      ref: 'master',
      sha: '7deaff71a2be08145d83f0177edbf2dfb3e91262',
      user: {
        login: 'ohmyzsh',
        id: 22552083,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyNTUyMDgz',
        avatar_url: 'https://avatars1.githubusercontent.com/u/22552083?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ohmyzsh',
        html_url: 'https://github.com/ohmyzsh',
        followers_url: 'https://api.github.com/users/ohmyzsh/followers',
        following_url: 'https://api.github.com/users/ohmyzsh/following{/other_user}',
        gists_url: 'https://api.github.com/users/ohmyzsh/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/ohmyzsh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ohmyzsh/subscriptions',
        organizations_url: 'https://api.github.com/users/ohmyzsh/orgs',
        repos_url: 'https://api.github.com/users/ohmyzsh/repos',
        events_url: 'https://api.github.com/users/ohmyzsh/events{/privacy}',
        received_events_url: 'https://api.github.com/users/ohmyzsh/received_events',
        type: 'Organization',
        site_admin: false
      },
      repo: {
        id: 291137,
        node_id: 'MDEwOlJlcG9zaXRvcnkyOTExMzc=',
        name: 'ohmyzsh',
        full_name: 'ohmyzsh/ohmyzsh',
        private: false,
        owner: {
          login: 'ohmyzsh',
          id: 22552083,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyNTUyMDgz',
          avatar_url: 'https://avatars1.githubusercontent.com/u/22552083?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ohmyzsh',
          html_url: 'https://github.com/ohmyzsh',
          followers_url: 'https://api.github.com/users/ohmyzsh/followers',
          following_url: 'https://api.github.com/users/ohmyzsh/following{/other_user}',
          gists_url: 'https://api.github.com/users/ohmyzsh/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/ohmyzsh/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/ohmyzsh/subscriptions',
          organizations_url: 'https://api.github.com/users/ohmyzsh/orgs',
          repos_url: 'https://api.github.com/users/ohmyzsh/repos',
          events_url: 'https://api.github.com/users/ohmyzsh/events{/privacy}',
          received_events_url: 'https://api.github.com/users/ohmyzsh/received_events',
          type: 'Organization',
          site_admin: false
        },
        html_url: 'https://github.com/ohmyzsh/ohmyzsh',
        description: '🙃 A delightful community-driven (with 1700+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc), over 140 themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.',
        fork: false,
        url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh',
        forks_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/forks',
        keys_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/keys{/key_id}',
        collaborators_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/teams',
        hooks_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/hooks',
        issue_events_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/events',
        assignees_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/assignees{/user}',
        branches_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/tags',
        blobs_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/languages',
        stargazers_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/stargazers',
        contributors_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/contributors',
        subscribers_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/subscribers',
        subscription_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/subscription',
        commits_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/contents/{+path}',
        compare_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/merges',
        archive_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/downloads',
        issues_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues{/number}',
        pulls_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/milestones{/number}',
        notifications_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/labels{/name}',
        releases_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/releases{/id}',
        deployments_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/deployments',
        created_at: '2009-08-28T18:15:37Z',
        updated_at: '2020-07-11T11:24:22Z',
        pushed_at: '2020-07-11T12:00:53Z',
        git_url: 'git://github.com/ohmyzsh/ohmyzsh.git',
        ssh_url: 'git@github.com:ohmyzsh/ohmyzsh.git',
        clone_url: 'https://github.com/ohmyzsh/ohmyzsh.git',
        svn_url: 'https://github.com/ohmyzsh/ohmyzsh',
        homepage: 'https://ohmyz.sh',
        size: 6973,
        stargazers_count: 113091,
        watchers_count: 113091,
        language: 'Shell',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 20126,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 718,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz'
        },
        forks: 20126,
        open_issues: 718,
        watchers: 113091,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false
      }
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/9102'
      },
      html: {
        href: 'https://github.com/ohmyzsh/ohmyzsh/pull/9102'
      },
      issue: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/9102'
      },
      comments: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/9102/comments'
      },
      review_comments: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/9102/comments'
      },
      review_comment: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/comments{/number}'
      },
      commits: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls/9102/commits'
      },
      statuses: {
        href: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/statuses/d771734400f1ffaf7e0bb703cc3df1676241ecc6'
      }
    },
    author_association: 'NONE',
    active_lock_reason: null,
    merged: false,
    mergeable: null,
    rebaseable: null,
    mergeable_state: 'unknown',
    merged_by: null,
    comments: 3,
    review_comments: 0,
    maintainer_can_modify: true,
    commits: 3,
    additions: 25,
    deletions: 11,
    changed_files: 2
  },
  before: 'd5161b9f72be5fea07b30ccca7df2c3caa1ad5c4',
  after: 'd771734400f1ffaf7e0bb703cc3df1676241ecc6',
  repository: {
    id: 291137,
    node_id: 'MDEwOlJlcG9zaXRvcnkyOTExMzc=',
    name: 'ohmyzsh',
    full_name: 'ohmyzsh/ohmyzsh',
    private: false,
    owner: {
      login: 'ohmyzsh',
      id: 22552083,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyNTUyMDgz',
      avatar_url: 'https://avatars1.githubusercontent.com/u/22552083?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ohmyzsh',
      html_url: 'https://github.com/ohmyzsh',
      followers_url: 'https://api.github.com/users/ohmyzsh/followers',
      following_url: 'https://api.github.com/users/ohmyzsh/following{/other_user}',
      gists_url: 'https://api.github.com/users/ohmyzsh/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/ohmyzsh/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ohmyzsh/subscriptions',
      organizations_url: 'https://api.github.com/users/ohmyzsh/orgs',
      repos_url: 'https://api.github.com/users/ohmyzsh/repos',
      events_url: 'https://api.github.com/users/ohmyzsh/events{/privacy}',
      received_events_url: 'https://api.github.com/users/ohmyzsh/received_events',
      type: 'Organization',
      site_admin: false
    },
    html_url: 'https://github.com/ohmyzsh/ohmyzsh',
    description: '🙃 A delightful community-driven (with 1700+ contributors) framework for managing your zsh configuration. Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc), over 140 themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.',
    fork: false,
    url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh',
    forks_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/forks',
    keys_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/teams',
    hooks_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/hooks',
    issue_events_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/events{/number}',
    events_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/events',
    assignees_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/assignees{/user}',
    branches_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/branches{/branch}',
    tags_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/tags',
    blobs_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/languages',
    stargazers_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/stargazers',
    contributors_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/contributors',
    subscribers_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/subscribers',
    subscription_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/subscription',
    commits_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/contents/{+path}',
    compare_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/merges',
    archive_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/downloads',
    issues_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/issues{/number}',
    pulls_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/labels{/name}',
    releases_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/releases{/id}',
    deployments_url: 'https://api.github.com/repos/ohmyzsh/ohmyzsh/deployments',
    created_at: '2009-08-28T18:15:37Z',
    updated_at: '2020-07-11T11:24:22Z',
    pushed_at: '2020-07-11T12:00:53Z',
    git_url: 'git://github.com/ohmyzsh/ohmyzsh.git',
    ssh_url: 'git@github.com:ohmyzsh/ohmyzsh.git',
    clone_url: 'https://github.com/ohmyzsh/ohmyzsh.git',
    svn_url: 'https://github.com/ohmyzsh/ohmyzsh',
    homepage: 'https://ohmyz.sh',
    size: 6973,
    stargazers_count: 113091,
    watchers_count: 113091,
    language: 'Shell',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 20126,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 718,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz'
    },
    forks: 20126,
    open_issues: 718,
    watchers: 113091,
    default_branch: 'master'
  },
  organization: {
    login: 'ohmyzsh',
    id: 22552083,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyNTUyMDgz',
    url: 'https://api.github.com/orgs/ohmyzsh',
    repos_url: 'https://api.github.com/orgs/ohmyzsh/repos',
    events_url: 'https://api.github.com/orgs/ohmyzsh/events',
    hooks_url: 'https://api.github.com/orgs/ohmyzsh/hooks',
    issues_url: 'https://api.github.com/orgs/ohmyzsh/issues',
    members_url: 'https://api.github.com/orgs/ohmyzsh/members{/member}',
    public_members_url: 'https://api.github.com/orgs/ohmyzsh/public_members{/member}',
    avatar_url: 'https://avatars1.githubusercontent.com/u/22552083?v=4',
    description: 'A delightful community-driven framework for managing your zsh configuration.'
  },
  sender: {
    login: 'mcornella',
    id: 1441704,
    node_id: 'MDQ6VXNlcjE0NDE3MDQ=',
    avatar_url: 'https://avatars1.githubusercontent.com/u/1441704?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mcornella',
    html_url: 'https://github.com/mcornella',
    followers_url: 'https://api.github.com/users/mcornella/followers',
    following_url: 'https://api.github.com/users/mcornella/following{/other_user}',
    gists_url: 'https://api.github.com/users/mcornella/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mcornella/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mcornella/subscriptions',
    organizations_url: 'https://api.github.com/users/mcornella/orgs',
    repos_url: 'https://api.github.com/users/mcornella/repos',
    events_url: 'https://api.github.com/users/mcornella/events{/privacy}',
    received_events_url: 'https://api.github.com/users/mcornella/received_events',
    type: 'User',
    site_admin: false
  },
  installation: {
    id: 5790348,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uNTc5MDM0OA=='
  }
} as PullRequestSynchronizeEvent
