if(document.querySelectorAll('#landing-slider').length > 0) {
/*var slider = new KeenSlider(
    "#landing-slider",
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )*/

  function navigation(slider) {
    let wrapper, dots, arrowLeft, arrowRight
    
    function markup(remove) {
      wrapperMarkup(remove)
      dotMarkup(remove)
    }
  
    function removeElement(elment) {
      elment.parentNode.removeChild(elment)
    }
    function createDiv(className) {
      var div = document.createElement("div")
      var classNames = className.split(" ")
      classNames.forEach((name) => div.classList.add(name))
      return div
    }
  
    function wrapperMarkup(remove) {
      if (remove) {
        var parent = wrapper.parentNode
        while (wrapper.firstChild)
          parent.insertBefore(wrapper.firstChild, wrapper)
        removeElement(wrapper)
        return
      }
      wrapper = createDiv("navigation-wrapper")
      slider.container.parentNode.appendChild(wrapper)
      wrapper.appendChild(slider.container)
    }
  
    function dotMarkup(remove) {
      if (remove) {
        removeElement(dots)
        return
      }
      dots = createDiv("dots")
      slider.track.details.slides.forEach((_e, idx) => {
        var dot = createDiv("dot")
        dot.addEventListener("click", () => slider.moveToIdx(idx))
        dots.appendChild(dot)
      })
      wrapper.appendChild(dots)
    }
  
    function updateClasses() {
      var slide = slider.track.details.rel
      Array.from(dots.children).forEach(function (dot, idx) {
        idx === slide
          ? dot.classList.add("dot--active")
          : dot.classList.remove("dot--active")
      })
    }
  
    slider.on("created", () => {
      markup()
      updateClasses()
    })
    slider.on("optionsChanged", () => {
      console.log(2)
      markup(true)
      markup()
      updateClasses()
    })
    slider.on("slideChanged", () => {
      updateClasses()
    })
    slider.on("destroyed", () => {
      markup(true)
    })
  }
  
  var slider = new KeenSlider("#landing-slider", {
    loop: true,
  }, [navigation, (slider) => {
    let timeout
    let mouseOver = false
    function clearNextTimeout() {
      clearTimeout(timeout)
    }
    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, 2000)
    }
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  }])
}


if(document.querySelectorAll('#logos-slider').length > 0) {
  var slider = new KeenSlider(
      "#logos-slider",
      {
        //loop: true,
        slides: {
          perView: 5,
        }
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 5000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )

    /*var sliderMobile = new KeenSlider(
      "#logos-slider-mobile",
      {
        loop: true,
        slides: {
          perView: 2,
        }
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )*/

    function navigation(slider) {
      let wrapper, dots, arrowLeft, arrowRight
    
      function markup(remove) {
        wrapperMarkup(remove)
        dotMarkup(remove)
      }
    
      function removeElement(elment) {
        elment.parentNode.removeChild(elment)
      }
      function createDiv(className) {
        var div = document.createElement("div")
        var classNames = className.split(" ")
        classNames.forEach((name) => div.classList.add(name))
        return div
      }
    
      function wrapperMarkup(remove) {
        if (remove) {
          var parent = wrapper.parentNode
          while (wrapper.firstChild)
            parent.insertBefore(wrapper.firstChild, wrapper)
          removeElement(wrapper)
          return
        }
        wrapper = createDiv("navigation-wrapper")
        slider.container.parentNode.appendChild(wrapper)
        wrapper.appendChild(slider.container)
      }
    
      function dotMarkup(remove) {
        if (remove) {
          removeElement(dots)
          return
        }
        dots = createDiv("dots")
        slider.track.details.slides.forEach((_e, idx) => {
          var dot = createDiv("dot")
          dot.addEventListener("click", () => slider.moveToIdx(idx))
          dots.appendChild(dot)
        })
        wrapper.appendChild(dots)
      }
    
      function updateClasses() {
        var slide = slider.track.details.rel
        /*slide === 0
          ? arrowLeft.classList.add("arrow--disabled")
          : arrowLeft.classList.remove("arrow--disabled")
        slide === slider.track.details.slides.length - 1
          ? arrowRight.classList.add("arrow--disabled")
          : arrowRight.classList.remove("arrow--disabled")*/
        Array.from(dots.children).forEach(function (dot, idx) {
          idx === slide
            ? dot.classList.add("dot--active")
            : dot.classList.remove("dot--active")
        })
      }
    
      slider.on("created", () => {
        markup()
        updateClasses()
      })
      slider.on("optionsChanged", () => {
        console.log(2)
        markup(true)
        markup()
        updateClasses()
      })
      slider.on("slideChanged", () => {
        updateClasses()
      })
      slider.on("destroyed", () => {
        markup(true)
      })
    }
    
    var slider = new KeenSlider("#logos-slider-mobile", { loop: true}, [navigation, (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    }])
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots)
      return
    }
    dots = createDiv("dots")
    slider.track.details.slides.forEach((_e, idx) => {
      var dot = createDiv("dot")
      dot.addEventListener("click", () => slider.moveToIdx(idx))
      dots.appendChild(dot)
    })
    wrapper.appendChild(dots)
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper)
      removeElement(wrapper)
      return
    }
    wrapper = createDiv("navigation-wrapper")
    slider.container.parentNode.appendChild(wrapper)
    wrapper.appendChild(slider.container)
  }

  function updateClasses() {
    var slide = slider.track.details.rel
    //slide === 0
      /*? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")*/
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active")
    })
  }