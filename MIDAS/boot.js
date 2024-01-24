var emblaNode = document.querySelector(".embla");
      var options = { loop: false };
      var plugins = [EmblaCarouselAutoplay(1)]; // Plugins

      var embla = EmblaCarousel(emblaNode, options, plugins);
