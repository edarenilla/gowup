function ImgAgencia() {
    return (
      <picture>
        <source 
          srcSet="/images/agencia-marketing-digital_2560w.webp" 
          media="(min-width: 1921px)" 
        />
        <source 
          srcSet="/images/agencia-marketing-digital_1920w.webp" 
          media="(min-width: 1441px)" 
        />
        <source 
          srcSet="/images/agencia-marketing-digital_1440w.webp" 
          media="(min-width: 1025px)" 
        />
        <source 
          srcSet="/images/agencia-marketing-digital_1024w.webp" 
          media="(min-width: 769px)" 
        />
        <source 
          srcSet="/images/agencia-marketing-digital_768w.webp" 
          media="(min-width: 481px)" 
        />
        <source 
          srcSet="/images/agencia-marketing-digital_480w.webp" 
          media="(max-width: 480px)" 
        />
        <img 
          src="/images/agencia-marketing-digital_1024w.webp" 
          alt="Agencia de marketing digital especializada en estrategias SEO, publicidad y branding" 
          width="1024" 
          height="1024"
        />
      </picture>
    );
  }
  
  export default ImgAgencia;
  