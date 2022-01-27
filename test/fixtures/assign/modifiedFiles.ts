/* eslint-disable no-template-curly-in-string */
import { PullsListFilesResponseData } from '../../../src/actions/assign'

export default [
  {
    sha: '40050a704603103d24d37a777cff345a530f34d9',
    filename: 'plugins/gitfast/update',
    status: 'modified',
    additions: 2,
    deletions: 0,
    changes: 2,
    blob_url: 'https://github.com/bartekpacia/ohmyzsh/blob/5383477f0701be7802f356fbc5c5db118dc4edd8/plugins/gitfast/update',
    raw_url: 'https://github.com/bartekpacia/ohmyzsh/raw/5383477f0701be7802f356fbc5c5db118dc4edd8/plugins/gitfast/update',
    contents_url: 'https://api.github.com/repos/bartekpacia/ohmyzsh/contents/plugins/gitfast/update?ref=5383477f0701be7802f356fbc5c5db118dc4edd8',
    patch: '@@ -7,3 +7,5 @@ curl -s -o _git "${url}/git-completion.zsh?h=v${version}" &&\n curl -s -o git-completion.bash "${url}/git-completion.bash?h=v${version}" &&\n curl -s -o git-prompt.sh "${url}/git-prompt.sh?h=v${version}" &&\n git apply updates.patch\n+\n+echo "This is an example change to a plugin!"\n\\ No newline at end of file'
  }
] as PullsListFilesResponseData
