# What are Semantic Elements?

  1. A semantic element clearly describes its meaning to both the browser and
     the developer.
  
  2. List of Semantic elements include: form, table, articles, aside details,
     figcaption, figure, footer, header, main, mark, nav, section, summary, time
  
  3. Non-semantic elements sech as 'div' and 'span' tells nothing about its content

# Section Element

  1. The 'section' element defines a section in a document. A section is a
     thematic grouping of content, typically with a heading.
  
  2. Used for chapters, introduction, news items and contact information

    e.g
    <section>
      <h1>WWF</h1>
      <p>
        The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.
      </p>
    </section>

# Article Element

  1. The 'article' element specifies independent, self-contained content. An
     article should make sense on its own, and it should be possible to
     distribute it independently from the rest of the web site.
  
  2. Examples include forum post, blog post, user comments, product cards and
     newspaper articles

    e.g
    <article>
      <h2>Google Chrome</h2>
      <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
    </article>

# Header Element

  1. The 'header' element represents a container for introductory content or a
     set of navigational links.
  
  2. A 'header' element typically contains one or more heading elements such as
     h1 or h2, logo or icon, or aurthor information

    e.g
    <article>
      <header>
        <h1>What Does WWF Do?</h1>
        <p>WWF's mission:</p>
      </header>
      <p>WWF's mission is to stop the degradation of our planet's natural environment,
      and build a future in which humans live in harmony with nature.</p>
    </article>

# Nav Element 

  1. The 'nav' element defines a set of navigation links

  2. Notice that not all links of a document should be inside a 'nav' element.
     The 'nav' element is intended only for major blocks of navigation links.
  
    e.g
    <nav>
      <a href="/html/">HTML</a>
      <a href="/css/">CSS</a> 
      <a href="/js/">JavaScript</a>
      <a href="/jquery/">jQuery</a>
    </nav>

  3. Note that the nav tag is equivalent to a div tag with the role navigation
     attached to it 

     e.g
     <nav></nav> = <div role="navigation"></div>

# Aside Element

  1. The 'aside' element defines some content aside from the content it is placed in (like a sidebar).

  e.g
  <aside>
    <h4>Epcot Center</h4>
    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
  </aside>

# Footer Element 

  1. he 'footer' element defines a footer for a document or section.

  2. A 'footer' element typically contains the copy right, sitemap, back to top
     links, contact information etc

# Figure and Figcaption elements

  1. The 'figure' tag specifies self-contained content, like illustrations,
     diagrams, photos, code listings, etc.
  
  2. The 'figcaption' tag defines a caption for a 'figure' element. The
     'figcaption' element can be placed as the first or as the last child of a
     'figure' element.

    e.g
    <figure>
      <img src="pic_trulli.jpg" alt="Trulli">
      <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
    </figure>
    
# Main tag 

  1. The 'main' element should contain the main content for our web page and
     content should be unique to the individual page, and should not appear
     elsewhere on the site.
  
    e.g
    <main>
      <h1>Most Popular Browsers</h1>
      <p>Chrome, Firefox, and Edge are the most used browsers today.</p>

      <article>
        <h2>Google Chrome</h2>
        <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
      </article>
    </main>

# Section Tags

  1. A section Tag is equal to a div tag with role = 'region'  using
     aria-labelby, aria-label , or a title