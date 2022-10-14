<script>
  import GitHub from '@icons/git-hub..svelte'
  import Twitter from '@icons/twitter.svelte'
  import YouTube from '@icons/you-tube.svelte'
  import { socialLinks } from '@lib/site-config'
  import { description, siteName } from '@lib/site-config'
  import Logo from '@icons/logo.svelte'
</script>

<footer class="bg-neutral text-neutral-content p-10 footer">
  <div>
    <Logo></Logo>
    <p>
      <!-- {siteName} -->
      <br />{description}
    </p>
  </div>
  <div>
    <span class="footer-title">Social</span>
    <div class="grid grid-flow-col gap-4">
      <a href={socialLinks.find(x => x.title === 'Twitter').path}>
        <Twitter />
      </a>
      <a href={socialLinks.find(x => x.title === 'YouTube').path}>
        <YouTube />
      </a>
      <a href={socialLinks.find(x => x.title === 'GitHub').path}>
        <GitHub />
      </a>
    </div>
  </div>
</footer>
