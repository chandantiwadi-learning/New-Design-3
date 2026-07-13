import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'Guide to Selecting Fastener Material for Marine Environments',
      date: '15 June 2026',
      image: '/images/pages_img_07.jpg',
      content: 'Marine environments present severe corrosion challenges for mechanical fasteners. Saltwater exposure accelerates oxidation and galvanic corrosion, which can compromise structural assemblies in boat hulls, offshore rigs, and coastal infrastructure. In this guide, we evaluate why Stainless Steel, Duplex, and Monel alloys are the ideal selections for saltwater resilience and how proper grade selection prevents joint failures.',
    },
    {
      title: 'ASME vs DIN Standards: Dimensional Compatibility in Piping Systems',
      date: '28 May 2026',
      image: '/images/pages_img_08.jpg',
      content: 'Piping specifications are governed by either Imperial (ASME) or Metric (DIN) standardization bodies. Selecting matching fasteners is critical for sealing flange joints correctly. We explain how thread pitches differ between Unified National Coarse (UNC) and Metric systems, and how to read standard classification tables to select compatible heavy hex bolts and nuts.',
    },
  ];

  return (
    <div className="blog-page-legacy select-none">
      <section className="main secondary_page" data-animate-up="header-static" data-animate-down="header-small">
        
        {/* Title breadcrumb */}
        <div className="title_container type_3 t_align_center">
          <div className="container">
            <ul className="path_list clearfix">
              <li><Link to="/">Home</Link></li>
              <li><i></i>Blog</li>
            </ul>
            <h1 style={{ color: '#fff' }}>Blog</h1>
          </div>
        </div>

        {/* Blog listings section */}
        <section className="home_blog our_work_section page_padding">
          <div className="container">
            <div className="row" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {posts.map((post, idx) => (
                <article 
                  key={idx}
                  className="style_01 parallax article_parallax" 
                  style={{ 
                    backgroundImage: "url('/images/about_parallax_bg.jpg')",
                    backgroundAttachment: 'fixed',
                    backgroundPosition: '50% 0px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '40px 30px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    marginBottom: '30px'
                  }}
                >
                  <div className="container">
                    {/* Left image */}
                    <div className="colorbox_container f_left" style={{ marginRight: '30px', marginBottom: '20px' }}>
                      <img src={post.image} alt={post.title} style={{ borderRadius: '4px', maxWidth: '300px', display: 'block' }} />
                    </div>

                    {/* Post meta details */}
                    <div className="post_info">
                      <span className="text-[#81efeb] text-xs font-bold block mb-2">{post.date}</span>
                      <h2 style={{ color: '#0d8bc5', fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>{post.title}</h2>
                    </div>

                    {/* Post content preview */}
                    <p style={{ textAlign: 'justify', lineHeight: '1.6em', color: '#fff', fontSize: '14px', marginBottom: '20px' }}>
                      {post.content}
                    </p>

                    <hr className="divider_type_02" style={{ border: '0', borderBottom: '1px solid rgba(255,255,255,0.15)', margin: '20px 0' }} />

                    {/* Links */}
                    <div className="clearfix post_tags_container">
                      <a href="#" onClick={(e) => e.preventDefault()} className="button_style_05 f_right">Read More</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </section>
    </div>
  );
};

export default Blog;
