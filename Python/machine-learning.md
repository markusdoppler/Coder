---
title: Machine Learning
---

# Machine Learning

<section>

## Machine Learning

~ predictive analysis
~ computational statistics
subset of artificial intelligence


* **Supervised learning**
    * training data: input and desired output (label)
    * algorithms: classification and regression
* **Unsupervised learning**
    * training data: only inputs and no desired output labels
    * algorithms: grouping or clustering of data points


### Branches
* Deep Learning

### Models (Classifiers)
* Decision Tree
* Model Selection
* Bayesian Networks
* Regression Techniques
* Support Vector Machines
* Random Forests
* Ensemble Methods
* Genetic algorithms
* Artificial neural networks



### Software Toolkits
* scikit-learn (python)
    * before starting run
       `conda activate`
* Tensorflow
* R






Classifier (box of rules)
function
input: data
output: label assigned to data

"supervised learning"
1. collect training data (features and labels)
2. train classifier
3. make predictions

types of classifiers
* decision tree
    * make graphical http://graphviz.org
* K nearest neighbours
* (artificial) Neural Network


➤ tree.py
Simple Classifier
```python
from sklearn import tree

# 0 = bumpy, 1 = smooth
features = [[150, 0],[170, 0],[140, 1],[130, 0]]
# 0 = orange, 1 = apple
labels = [0,0,1,1]

classifier = tree.DecisionTreeClassifier()

# find patterns in data (i.e. training)
classifier = classifier.fit(features, labels)

print(classifier.predict([[150,0]]))
```

➤ iris.py (Iris decision tree)


### Features
![Features](figures/features.tiff)
* informative i.e. useful
* independent (not correlated)
* simple

### Classifier
```
    def classify(features):
        # do some stuff
        return label
```

➤ pipeline.py
➤ neighbour.py


Tensorflow
➤ https://www.tensorflow.org
➤ https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/?utm_campaign=chrome_series_machinelearning_063016&utm_source=gdev&utm_medium=yt-desc#0
➤ https://github.com/random-forests/tutorials/blob/master/ep7.ipynb
➤ http://playground.tensorflow.org/

selfmade decision tree
➤ https://github.com/random-forests/tutorials/blob/master/decision_tree.ipynb









Robocars
➤ https://www.youtube.com/watch?v=Qv7dhms5dDQ
➤ https://github.com/drsimonclark/robocars
➤ http://www.petercollingridge.co.uk/tutorials/pygame-physics-simulation/





### Artificial Neural Network

connections of the biological neuron are modeled as *weights*



#### Deep Learning

based on artificial neural networks
each level learns to transform its input data into a slightly more abstract and composite representation
The "deep" in "deep learning" refers to the number of layers through which the data is transformed


* supervised learning
* semi-supervised learning
* unsupervised learning

architectures
* deep neural networks
* deep belief networks
* recurrent neural networks
* convolutional neural networks (CNNs)

</section>

---

<section>

## Scikit-Learn


### Machine Learning

#### Packages
[scikit-learn](https://scikit-learn.org/stable/index.html)
```python
import sklearn
```

Random Forest Permutation Importance
```python
import rfpimp
```
install using `pip install rfpimp`




#### Data Preparation

data (input `X` and output `y`)
```python
X = df[df.columns[:-1]]
y = df[df.columns[-1:]]
```

split data
* training data (e.g. 80%)
* testing data (e.g. 20%)
```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
```


##### Encode categorical data
encode categorical data into numbers for machine learning
```python
categorical_columns = ["Gender", "Married", "Dependents", "Education", "Self_Employed", "Loan_Status", "Credit_History", "Property_Area"]

for col in categorical_columns:
    df[col] = df[col].astype('category')

df = df.drop("Loan_ID", axis=1)

df = pd.get_dummies(df, drop_first=True)
```





#### Decision Tree
```python
model = DecisionTreeClassifier()
model.fit(X_train, y_train)
```

Visualise Decision Tree
```python
fig, axes = plt.subplots(nrows = 1,ncols = 1,figsize = (4,4), dpi=300)
tree.plot_tree(model)
fig.savefig('tree.png')
```

Evaluation
```python
y_pred = model.predict(X_test)
```

Scores
```python
accuracy_score(y_test, y_pred)
precision_score(y_test, y_pred)
recall_score(y_test, y_pred)
f1_score(y_test, y_pred)
```

K-Folds Cross Validation
```python
scores = cross_validate(model, X, y, cv=3, scoring=('accuracy', 'average_precision', 'recall','f1'))
```


#### Random Forest
```python
rfc = RandomForestClassifier()
rfc_scores = cross_validate(rfc, X, y.values.ravel(), cv=3, scoring=('accuracy', 'average_precision', 'recall','f1'))
```


```python
rfc = RandomForestClassifier()
rfc.fit(X_train, y_train.values.ravel())
importance = rfpimp.importances(rfc, X_test, y_test)
rfpimp.plot_importances(importance)
```

</section>

---

<section>

## Tensorflow


</section>


---

<section>

## Pytorch


</section>