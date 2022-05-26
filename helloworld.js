import $ from "jquery";

export function helloWorld() {
  console.log("Hello World!");

  //Inputs that determine what fields to show
  // var rating = $("#live_form input:radio[name=relationship-status]");
  $("input[type=radio][name=relationship-status]").on("change", function () {
    console.log(this.value);
    if(this.value == "Married"){
      $('[name="partners-form-group"]').removeClass("d-none");
      console.log("here")
    }
    else{
      $('[name="partners-form-group"]').addClass("d-none");
    }
  });

  // var testimonial = $("#live_form input:radio[name=testimonial]");

  // //Wrappers for all fields
  // var bad = $('#live_form textarea[name="feedback_bad"]').parent();
  // var ok = $('#live_form textarea[name="feedback_ok"]').parent();
  // var great = $('#live_form textarea[name="feedback_great"]').parent();
  // var testimonial_parent = $("#live_form #div_testimonial");
  // var thanks_anyway = $("#live_form #thanks_anyway");
  // var all = bad.add(ok).add(great).add(testimonial_parent).add(thanks_anyway); //shortcut for all wrapper elements

  // rating.on("click", fn)(function (fn) {
  //   //when the rating changes
  //   var value = this.value;
  //   all.addClass("d-none"); //hide everything and reveal as needed

  //   if (value == "Bad" || value == "Fair") {
  //     bad.removeClass("d-none"); //show feedback_bad
  //   } else if (value == "Good" || value == "Very Good") {
  //     ok.removeClass("d-none"); //show feedback_ok
  //   } else if (value == "Excellent") {
  //     testimonial_parent.removeClass("d-none"); //show testimonial question

  //     //if testimonial has already been answered
  //     if (testimonial_ok == "yes") {
  //       great.removeClass("d-none");
  //     } else if (testimonial_ok == "no") {
  //       thanks_anyway.removeClass("d-none");
  //     }
  //   }
  // });

  // testimonial.change(function () {
  //   //hide all except testimonial question
  //   all.addClass("hidden");
  //   testimonial_parent.removeClass("hidden");

  //   testimonial_ok = this.value;

  //   if (testimonial_ok == "yes") {
  //     //if user willing to write testimonial
  //     great.removeClass("hidden"); //show feedback_great
  //   } else {
  //     thanks_anyway.removeClass("hidden"); //show thanks message
  //   }
  // });
}
