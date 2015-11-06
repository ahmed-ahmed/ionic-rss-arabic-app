angular.module('app.controllers', [])
     
.controller('homeCtrl', function($scope) {

	$scope.cats = [
	{ 
		name: 'اخر الاخبار',
		news: [
				{
					id: 1,
			        title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		        	description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		        	image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
		        },
		        {
		        	id: 2,
			        title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		        	description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		        	image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
		        },
		        {
		        	id: 3,
			        title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		        	description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		        	image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
		        }]
    }, 
	{ 
		name: 'مصر',
		news: [
				{
					id: 4,
			        title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		        	description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		        	image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
		        },
		        {
		        	id: 5,
			        title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		        	description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		        	image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
		        },
		        {
		        	id: 6,
			        title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		        	description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		        	image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
		        }]
	}
];

})
   
.controller('articleCtrl', function($scope) {
	$scope.article = {
		id:1, 
		title: "بالصور.. سباق أهالى \"الزوايدة\" بالإسكندرية على صيد القراميط من مياه الأمطار",
		description: "تداول رواد موقع التواصل الاجتماعى \"فيس بوك\"، اليوم الخميس، صوراً لأهالى منطقة \"الزوايدة\" بمحافظة الإسكندرية، وقد قاموا بالصيد فى مياه الأمطار التى تنتشر فى شوارع المحافظة.",
		image: 'https://t1.gstatic.com/images?q=tbn:ANd9GcSywMAAXMtgOBo_zU5Kpog6Z21GvD89opyV5KiF7UmSHzcblTXYHzkopG_MOq_sFvSDrhkDo4w'
	}


})
 